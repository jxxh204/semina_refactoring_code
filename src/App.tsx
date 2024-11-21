import CheckBox from "./components/CheckBox";
import FrameworkSelect from "./components/FrameworkSelect";
import ReactFrameworkSelect from "./components/ReactFrameworkSelect";

export default function App() {
  return (
    <div className="p-4 flex flex-col gap-10">
      <ReactFrameworkSelect defaultValue="Next.js" label="change" />

      {/* React Framework Select를 리팩터링*/}
      <FrameworkSelect />

      {/* 응용 */}
      <CheckBox
        options={["1", "2", "3"]}
        defaultValue="1"
        onChange={() => {}}
      />
    </div>
  );
}
