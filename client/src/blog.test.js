import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Home from '../src/pages/Home.jsx'; 

test('Heading should be Welcome to my Blog', () => {
    render(
        <BrowserRouter> 
            <Home />
        </BrowserRouter>
    );

    const welcomeMessage = screen.getByText("Welcome to my Blog");
    expect(welcomeMessage).toBeInTheDocument();
});


test('renders welcome message and call to action', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const callToAction = screen.getByTestId('call-to-action');
    expect(callToAction).toBeInTheDocument();
  });


  test('renders recent posts section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  
    const recentPostsSection = screen.getByText((content, element) => {
      // Check if the element contains the text "Recent Posts"
      return element.textContent.includes('Recent Posts');
    });
    expect(recentPostsSection).toBeInTheDocument();
  });

  
test('renders view all posts link', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const viewAllPostsLink = screen.getByRole('link', { name: /View all posts/i });
    expect(viewAllPostsLink).toBeInTheDocument();
  });
