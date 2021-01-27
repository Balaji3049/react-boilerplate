import React from "react";
import { shallow } from "enzyme";
import App from "../App.js";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a header component", () => {
  expect(wrapped.find("h1").length).toEqual(1);
});

/* it("shows a Main container", () => {
  expect(wrapped.find(MainContainer).length).toEqual(1);
}); */
