import { useState } from "react";
import InputButton from "./InputButton";
import Select from "./Select/Select";

function FrameworkSelect() {
  const [selected, change] = useState("");
  const onChange = (value: string) => {
    change(value);
  };
  const options = ["Next.js", "Remix", "Gatsby", "Relay"]; // 도메인 데이터
  // 도메인

  return (
    //UI
    <Select
      trigger={<InputButton label={"1차 리팩터링"} value={selected} />}
      // input button 컴포넌트를 변경하더라도 영향을 끼치지 않게 되었다.
      value={selected}
      onChange={onChange}
      options={options}
    />
  );
}

export default FrameworkSelect;
