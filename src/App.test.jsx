import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";



describe("App", () => {
  it("Render Spinner first", () => {
    render(<App />);
    screen.debug()
  });
  
  it('Display Spinner while loading', ()=>{
    render(
      <App />
    );
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

 /*  it('Render Navbar, Footer after spinner', async ()=>{
    render(
      <App/>
    )

    await waitFor(()=>{
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    }, {timeout: 5000})
  }); */

});
