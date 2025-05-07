import { JSX } from "react";
import ToDoList from '../components/ToDoList';
import CounterExample from "../components/CounterExample";
import ShowHideDiv from "../components/ShowHideDiv";
import Home from "../components/Home";
import LazyLoadSuspense from "../react-next-concepts/LazyLoadSuspense";
import GoBackToHome from "../components/GoBacktoHome";
import FetchLazyLoadImages from "../react-next-concepts/FetchApiImages";
import IntersectionObserver from "../react-next-concepts/IntersectionObserver";
import { ArticleSort } from "../components/ArticleSort";
import { WordOmitter } from "../components/WordOmitter";
import { ES6 } from "../coding-practice/ES6";
import Cart from "../components/Cart";
import UsePreviousHook from "../hooks/usePreviousHook";
import { ConnectFour } from "../components/ConnectFour";
import ImageCarousel from "../components/ImageCarousel";
import { TicTacToe } from "../components/TicTacToe";
import { VirtualizedListWrapper } from "../react-next-concepts/VirtualizedList";
import ErrorBoundary from "../react-next-concepts/ErrorBoundary";
import ErrorBoundaryThrowError from "../react-next-concepts/ErrorBoundaryThrowError";
import UseTransition from "../hooks/useTransition";
import AutomaticBatching from "../react-next-concepts/AutomaticBatching";
import UseDeferredValue from "../hooks/UseDeferredValue";
import UseWindowDimentionsOnResize from "../hooks/useWindowDimentionsOnResize";
import SuggestedCities from "../components/SuggestedCities";
import { Es6TsPractice } from "../coding-practice/Es6TsPractice";
import UseDebounceExample from "../components/useDebounceExample";
import TsFunctionDeclarations from "../coding-practice/TsFunctionDeclarations";
import UseReducerComp from "../hooks/UseReducerComp";
import ParkingLotUI from "../components/ParkingSystemUsage";
import UserTable from "../components/UserTable";
import { ToDoListProps } from "../components/ToDoListProps";
import { ToDoListUsingContext } from "../components/ToDoListContext";
import { BrwoserRouterExample } from "../components/BrwoserRouterExample";
import CheckboxChange from "../components/CheckboxChange";
import { LocalStorageBasic } from "../components/LocalStorageBasic";
import { UseThemeExample } from "../hooks/UseThemeExample";
import { AccordionExample } from "../components/AccordionExample";
import { UseInputControlExample } from "../hooks/useInputControl";
import FlexboxCssGrid from "../css-html/FlexboxCssGrid";
import { CreatePortal } from "../react-next-concepts/createPortal";
import { ForwardRefParent } from "../react-next-concepts/forwardRef";
import MarketAxessStockFilter from "../components/MarketAxessStockFilter";
import { DogGalleryPromiseAll } from "../react-next-concepts/DogGalleryPromiseAll";
import { DogGalleryAsyncAwait } from "../react-next-concepts/DogGalleryAsyncAwait";
import GreenLightRedLight from "../components/GreenLightRedLight";
import { PatientPortalRegard } from "../components/PatientPortalRegard";
import { ReactChartJs2 } from "../third-party-libs/React-chartjs-2";
import MuiXDataGrid from "../third-party-libs/MuiXDataGrid";
import { UserManagerPgsql } from "../third-party-libs/UserManagerPgsql";
import { UserManagerMongo } from "../third-party-libs/UserManagerMongo";
import { GraphqlPostDemoUi } from "../third-party-libs/GraphqlPostDemoUi";
import WebSocketChat from "../components/WebSocketChat";
import { PaypalSheetBeamsFrameBolts } from "../components/PaypalSheetBeamsFrameBolts";

interface RouteType {
  path: string;
  element: JSX.Element;
  linkText: string;

  hideOnHome?: boolean;
  newSection?: boolean;
}

type ArticleData = {
  title: string;
  upvotes: number;
  date: string;
}
export type ArticlesDataI = ArticleData[];

export const ARTICLES_DATA: ArticlesDataI = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2025-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2024-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2021-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "1985-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
]

export const routes: RouteType[] = [
  //Coding Practice
  { path: "/Es6TsPractice", element: <Es6TsPractice />, linkText: "ES6 and TypeScript Practice", newSection: true },
  { path: "/es6-features", element: <ES6 />, linkText: "ES6 Features" },
  { path: "/TsFunctionDeclarations", element: <TsFunctionDeclarations />, linkText: "Typescript Function Declarations" },

  //React, Next Hooks
  { path: "/useInputControlExample", element: <UseInputControlExample />, linkText: "useInputControl", newSection: true },
  { path: "/useThemeExample", element: <UseThemeExample />, linkText: "useThemeExample" },
  { path: "/useReducerComp", element: <UseReducerComp />, linkText: "useReducer - User Profile Form" },
  { path: "/UseDebounceExample", element: <UseDebounceExample />, linkText: "useDebounce" },
  { path: "/UseDeferredValue", element: <UseDeferredValue />, linkText: "useDeferredValue" },
  { path: "/UseTransition", element: <UseTransition />, linkText: "useTransition" },
  { path: "/usePreviousHook", element: <UsePreviousHook />, linkText: "usePrevious Hook" },
  { path: "/useWindowDimentionsOnResize", element: <UseWindowDimentionsOnResize />, linkText: "useWindowDimentionsOnResize" },

  //React, Next Concepts
  { path: "/ForwardRefParent", element: <ForwardRefParent />, linkText: "Forward Ref", newSection: true },
  { path: "/CreatePortal", element: <CreatePortal />, linkText: "Create Portal" },
  { path: "/BrwoserRouterExample", element: <BrwoserRouterExample />, linkText: "BrwoserRouterExample" },
  { path: "/AutomaticBatching", element: <AutomaticBatching />, linkText: "Automatic Batching" },
  { path: "/ErrorBoundary", element: <ErrorBoundary children={<ErrorBoundaryThrowError />} />, linkText: "Error Boundary" },
  { path: "/VirtualizedListWrapper", element: <VirtualizedListWrapper />, linkText: "Virtualized List" },
  { path: "/IntersectionObserver", element: <IntersectionObserver />, linkText: "Intersection Observer" },
  { path: "/FetchApiImages", element: <FetchLazyLoadImages />, linkText: "Fetch API" },
  { path: "/LazyLoadSuspense", element: <LazyLoadSuspense />, linkText: "Lazy Load Suspense" },
  { path: "LocalStorage", element: <LocalStorageBasic />, linkText: "Local Storage" },
  { path: "*", element: <h1>404 <GoBackToHome /></h1>, linkText: "Catch Route (404)" },
  { path: "/", element: <Home />, hideOnHome: true, linkText: "Home" },

  //Third party libraries
  { path: "/MuiXDataGrid", element: <MuiXDataGrid />, linkText: "Mui X Data Grid", newSection: true },
  { path: "/GraphqlPostDemoUi", element: <GraphqlPostDemoUi />, linkText: "GraphQL Post Demo UI" },
  { path: "/UserManagerMongo", element: <UserManagerMongo />, linkText: "User Manager - Mongo" },
  { path: "/UserManagerPgsql", element: <UserManagerPgsql />, linkText: "Profile Manager - Pgsql Mongo" },
  { path: "/ReactChartJs2", element: <ReactChartJs2 />, linkText: "React Chart JS 2" },
  { path: "/PatientPortalRegard", element: <PatientPortalRegard />, linkText: "Patient Portal - TanStack Axios" },

  //Examples - Challenges
  { path: "/GreenLightRedLight", element: <GreenLightRedLight />, linkText: "Green Light Red Light", newSection: true },
  { path: "/PaypalSheetBeamsFrameBolts", element: <PaypalSheetBeamsFrameBolts />, linkText: "Paypal Sheet Beams Frame Bolts" },
  { path: "/DogGalleryPromiseAll", element: <DogGalleryPromiseAll />, linkText: "DogGallery - Promise All" },
  { path: "/DogGalleryAsyncAwait", element: <DogGalleryAsyncAwait />, linkText: "DogGallery - Async Await" },
  { path: "/MarketAxessStockFilter", element: <MarketAxessStockFilter />, linkText: "MarketAxess Stock Filter" },
  { path: "/Accordion", element: <AccordionExample />, linkText: "Accordion" },
  { path: "/UserTable", element: <UserTable />, linkText: "User Table" },
  { path: "/ParkingLotSystem", element: <ParkingLotUI />, linkText: "Parking Lot System" },
  { path: "/SuggestedCities", element: <SuggestedCities />, linkText: "Suggested Cities" },
  { path: "/TicTackToe", element: <TicTacToe />, linkText: "Tic Tac Toe" },
  { path: "/ImageCarousel", element: <ImageCarousel />, linkText: "Image Carousel" },
  { path: "/ConnectFour", element: <ConnectFour />, linkText: "Connect Four" },
  { path: "/cart", element: <Cart />, linkText: "Cart" },
  { path: "/WordOmitter", element: <WordOmitter />, linkText: "Word Omitter" },
  { path: "/CheckboxChange", element: <CheckboxChange />, linkText: "Checkbox Change" },
  { path: "/ArticleSort", element: <ArticleSort articlesData={ARTICLES_DATA} />, linkText: "Article Sort" },
  { path: "/ToDoListUsingContext", element: <ToDoListUsingContext />, linkText: "ToDoListUsingContext" },
  { path: "/ToDoListProps", element: <ToDoListProps />, linkText: "To Do List Props" },
  { path: "/ToDoList", element: <ToDoList />, linkText: "To Do List" },
  { path: "/ShowHideDiv", element: <ShowHideDiv />, linkText: "Show/hide content" },
  { path: "/counter-example", element: <CounterExample />, linkText: "Counter" },

  //Css, HTML, HTML5
  { path: "/FlexboxCssGrid", element: <FlexboxCssGrid />, linkText: "Flexbox and CSS Grid", newSection: true },
  { path: "/WebSocketChat", element: <WebSocketChat />, linkText: "WebSocket Chat" },

]
