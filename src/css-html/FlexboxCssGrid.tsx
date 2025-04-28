import React from "react";
import "../styles/FlexboxCssGrid.scss"; // Import the SCSS file for styles
import GoBackToHome from "../components/GoBacktoHome";

export default function FlexboxCssGrid() {
  return (
    <div className="layouts-advanced-demo">
      <GoBackToHome />
      {/* FLEXBOX EXAMPLES */}
      <section>
        <h2>Flexbox: Row, Space-Between, Center</h2>
        <p>
          display: flex;<br />
          flex-direction: row;<br />
          justify-content: space-between;<br />
          align-items: center;<br />
        </p>
        <div className="flex-row-space-between">
          <div className="box">A</div>
          <div className="box">B</div>
          <div className="box">C</div>
        </div>
      </section>
      <section>
        <h2>Flexbox: Column, Align & Justify Center</h2>
        <p>
          display: flex;<br />
          flex-direction: column;<br />
          align-items: center;<br />
          justify-content: center;<br />
        </p>
        <div className="flex-col-center">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </div>
      </section>
      <section>
        <h2>Flexbox: Wrap & Gap</h2>
        <p>
          display: flex;<br />
          flex-wrap: nowrap;<br />
        </p>
        <div className="flex-wrap-gap">
          <div className="box">Wrap 1</div>
          <div className="box">Wrap 2</div>
          <div className="box">Wrap 3</div>
          <div className="box">Wrap 4</div>
          <div className="box">Wrap 5</div>
          <div className="box">Wrap 6</div>
        </div>
      </section>

      {/* CSS GRID EXAMPLES */}
      <section>
        <h2>Grid: Basic 2x2</h2>
        <p>
          display: grid;<br />
          grid-template-columns: repeat(2, 1fr);<br />
        </p>
        <div className="grid-basic">
          <div className="box">I</div>
          <div className="box">II</div>
          <div className="box">III</div>
          <div className="box">IV</div>
        </div>
      </section>

      <section>
        <h2>Grid: Auto-fit vs Auto-fill</h2>
        <p>
          Auto-fit:<br />
          display: grid;<br />
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));<br />
        </p>
        <div className="grid-auto-fit">
          <div className="box">Fit 1</div>
          <div className="box">Fit 2</div>
          <div className="box">Fit 3</div>
          <div className="box">Fit 4</div>
        </div>
        <p>
          Auto-fill:<br />
          display: grid;<br />
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));<br />
        </p>
        <div className="grid-auto-fill">
          <div className="box">Fill 1</div>
          <div className="box">Fill 2</div>
          <div className="box">Fill 3</div>
          <div className="box">Fill 4</div>
          <div className="box">Fill 5</div>
        </div>
      </section>

      <section>
        <h2>Grid: Justify & Align Content</h2>
        <p>
          display: grid; <br />
          grid-template-columns: repeat(3, 120px); <br />
          grid-template-rows: repeat(2, 60px);<br />
          justify-content: center;<br />
          align-content: center;
        </p>
        <div className="grid-justify-align">
          <div className="box">JA 1</div>
          <div className="box">JA 2</div>
          <div className="box">JA 3</div>
          <div className="box">JA 4</div>
        </div>
      </section>

      <section>
        <h2>Grid: Template Areas</h2>
        <p>
          display: grid;<br />
          grid-template-areas:<br />
          "header header"<br />
          "sidebar content"<br />
          "footer footer";<br />
          grid-template-columns: 140px 1fr;<br />
          grid-template-rows: 48px 120px 40px;<br /><br />
          Childs: <br />
          grid-area: header;<br />
          grid-area: sidebar;<br />
          grid-area: content;<br />
          grid-area: footer;<br />
        </p>
        <div className="grid-template-areas">
          <div className="header">Header</div>
          <div className="sidebar">Sidebar</div>
          <div className="content">Content</div>
          <div className="footer">Footer</div>
        </div>
      </section>

      <section>
        <h2>Grid: Item Alignment</h2>
        <p>
          display: grid;<br />
          grid-template-columns: repeat(3, 1fr);<br /><br />
          Child: <br />
          align-self: start;<br />
          align-self: center;<br />
          align-self: end;<br />
        </p>
        <div className="grid-align-items">
          <div className="box align-start">Start</div>
          <div className="box align-center">Center</div>
          <div className="box align-end">End</div>
        </div>
      </section>
    </div>
  );
}