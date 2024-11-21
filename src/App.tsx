import ReactFrameworkSelect from "./components/ReactFrameworkSelect";

export default function App() {
  return (
    <div className="p-4">
      <ReactFrameworkSelect defaultValue="Next.js" label="change" />
    </div>
  );
}
