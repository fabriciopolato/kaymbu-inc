import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { ArrowLeft } from "./StyledArrowLeft";

describe("ArrowLeft", () => {
  it("should change size when size prop is defined", () => {
    render(<ArrowLeft size={20} />);

    const arrowElement = screen.getByTitle(/back-arrow/i);
    expect(arrowElement).toHaveStyle({ borderTop: "20px solid transparent" });
  });
});
