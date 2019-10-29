import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { GridProvider } from "./GridContext";

Enzyme.configure({ adapter: new Adapter() });

function createItems(ids) {
  return ids.map(id => ({ id }));
}

// Simple enough for this purpose, as we only check the order of IDs.
function isArrayEqual(a1, a2) {
  return a1.map(item => item.id).join("") === a2.join("");
}

it("Move items to given destination", () => {
  const gridContext = mount(<GridProvider />);
  gridContext.setState({ items: createItems([1, 2, 3]) });

  gridContext.instance().moveItem(3, 1);
  const { items } = gridContext.state();

  expect(isArrayEqual(items, [3, 1, 2])).toBeTruthy();
});

it("Handles unknown destinations", () => {
  const gridContext = mount(<GridProvider />);
  gridContext.setState({ items: createItems([1, 2, 3]) });

  gridContext.instance().moveItem(3, -1);
  const { items } = gridContext.state();

  expect(isArrayEqual(items, [1, 2, 3])).toBeTruthy();
});
