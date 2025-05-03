//@ts-nocheck
/*
You are designing a frontend and backend architecture for a patient dashboard managed by doctors. Each patient has multiple health conditions, and each condition may be associated with one or more prescribed medications. The system must support the following:

✅ Requirements
  1.	Patient Dashboard View:
  •	Fetch all conditions for a given patient.
  •	Display the latest doctor notes and statuses (approved, declined, pending) for each condition.
  2.	Condition Interaction:
  •	When a condition is clicked, fetch:
  •	The list of related medications with dosage instructions.
  •	Any notes or decisions made by the doctor.
  3.	Doctor Actions:
  •	A doctor can approve or decline a condition with an optional note.
  •	They should also be able to view medication details before making a decision.

*/
import GoBackToHome from "./GoBacktoHome";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

const fetchPatientData = async () => {
  const res = await axios.get('http://localhost:3001/patients/1');
  return res.data;
};

const patchDoctorNote = async ({ conditionId, note }) => {
  const res = await fetchPatientData();
  const updatedConditions = res.conditions.map(c =>
    c.id === conditionId ? { ...c, doctorNote: note } : c
  );
  await axios.patch('http://localhost:3001/patients/1', {
    ...res.data,
    conditions: updatedConditions
  });
};

export const PatientPortalRegard = () => {
  const queryClient = useQueryClient();
  const { data: patient, isLoading } = useQuery({
    queryKey: ['patient'],
    queryFn: fetchPatientData
  });

  const mutation = useMutation({
    mutationFn: patchDoctorNote,
    onSuccess: () => queryClient.invalidateQueries(['patient'])
  });

  const [expandedCondition, setExpandedCondition] = useState<string | null>(null);
  const [noteDrafts, setNoteDrafts] = useState({});

  if (isLoading) return <div>Loading...</div>;
  if (!patient) return <div>No patient data found</div>;

  const handleNoteChange = (id, value) => {
    setNoteDrafts(prev => ({ ...prev, [id]: value }));
  };

  const handleNoteSave = (conditionId) => {
    mutation.mutate({ conditionId, note: noteDrafts[conditionId] });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <GoBackToHome />
      <h1 className="text-3xl font-bold mb-4">Patient Dashboard</h1>
      <h2 className="text-xl font-medium mb-6">{patient.name}</h2>

      <Accordion.Root
        type="single"
        collapsible
        value={expandedCondition}
        onValueChange={setExpandedCondition}
        className="space-y-4"
      >
        {patient.conditions.map((condition) => (
          <Accordion.Item key={condition.id} value={condition.id} className="border rounded shadow p-4">
            <Accordion.Header>
              <Accordion.Trigger className="w-full text-left text-lg font-semibold hover:underline">
                {condition.name} ({condition.status})
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="mt-2 space-y-2">
              <label className="block">
                <strong>Doctor's Note:</strong>
                <textarea
                  rows={3}
                  value={noteDrafts[condition.id] ?? condition.doctorNote}
                  onChange={(e) => handleNoteChange(condition.id, e.target.value)}
                  className="w-full mt-1 border rounded p-2"
                />
              </label>
              <button
                type="button"
                onClick={() => handleNoteSave(condition.id)}
                className="bg-blue-500 text-white px-4 py-1 rounded mt-2 hover:bg-blue-600"
              >
                Save Note
              </button>

              <div>
                <p className="font-semibold mt-4">Medications:</p>
                <ul className="list-disc ml-5">
                  {condition.medications.map((med) => (
                    <li key={med.id}>{med.name} - {med.dosage}</li>
                  ))}
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};