import {render, screen, cleanup, waitFor} from '@testing-library/react';
import Home from "../Home"

// test("should render home page", () => {
//     //expect(true).toBe(true);
//     render(<Home/>);
//     const homeElement = screen.getByTestId('home-container');
//     expect(homeElement).toBeInTheDocument();
// })

//   test("should throw error when not wrapped inside `UserProvider`", async() => {
//     jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
//     await waitFor(() => expect(() => render(<Home />).toThrow("Cannot use `useUser` outside of `UserProvider`")
//     ));
//     jest.restoreAllMocks()
     
//   });

  test('should throw error when not wrapped inside `UserProvider`', () => {
   //jest.fn().mockRejectedValue(new Error('Cannot use `useUser` outside of `UserProvider`'));
    let actualErrorMsg;
    try {
      render(<Home />);
    } catch(e) {
      actualErrorMsg = e.message;
    }
    //console.debug(actualErrorMsg);
    const expectedErrorMsg = 'Cannot use `useUser` outside of `UserProvider`';
    expect(actualErrorMsg).toEqual(expectedErrorMsg);
         const homeElement = screen.getByTestId('home-container');
    expect(homeElement).toBeInTheDocument();
  });