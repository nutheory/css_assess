export const findByDataTestId = (component, attr) =>
  component.find(`[data-testid='${attr}']`)
