import { render } from "react-dom";

import { Ref } from "./Ref";

render(
  <>
    <Ref text="Вакцина" link="https://ru.wikipedia.org/wiki/Вакцина" />
    <Ref text="Песочница" link="https://kodaktor.ru/g/jsplaygrounds" />
  </>,
  document.querySelector(".cont")
);
