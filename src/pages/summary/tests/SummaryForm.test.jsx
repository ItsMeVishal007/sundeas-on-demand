import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("<SummaryForm =>", () => {
  test("checking the behaviour of checkbox with button", () => {
    const { debug } = render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox");
    const btn = screen.getByRole("button", { name: "Place your order" });

    expect(checkbox).not.toBeChecked();
    expect(btn).toBeDisabled();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(btn).not.toBeDisabled();
  });
});
