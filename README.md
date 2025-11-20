<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AntonioIonica/shopping_cart_tests">
    <img src="./public/vite.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Shopping cart TESTS</h3>

  <p align="center">
    Basic shopping cart using fake API to handle tests.
    <br />
    <a href="https://github.com/AntonioIonica/shopping_cart_tests"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AntonioIonica/shopping_cart_tests">View Demo</a>
    &middot;
    <a href="https://github.com/AntonioIonica/shopping_cart_tests/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/AntonioIonica/shopping_cart_tests/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The whole purpose of the project is to understand how Vitest framework works, while implementing products for a shop to be functional

Key features:
  - add/remove products to the cart
  - browse random products
  - checkout the cart


Topics I learned: 
  - Vitest framework-testing DOM
  - Mockups for testing
  - TailwindCSS
  - React
  - Vite

Code examples: 

```js
describe("CheckoutButton", () => {
  it("disables button when cart is empty", () => {
    render(
      <CartProviderMock>
        <CheckoutButton />
      </CartProviderMock>,
    );

    expect(screen.getByText("Proceed to checkout")).toBeDisabled();
  });

  it("calls checkout when user clicks on checkout", () => {
    const mockCart = [{ id: 1, title: "Test Product", price: 10, quantity: 1 }];
    const mockCheckout = vi.fn();

    render(
      <CartProviderMock initialCart={mockCart} mockCheckout={mockCheckout}>
        <CheckoutButton />
      </CartProviderMock>,
    );

    fireEvent.click(screen.getByText("Proceed to checkout"));
    expect(mockCheckout).toHaveBeenCalled();
  });
});
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* React [![React][react.dev]][React-url]
* Vitest [![Vitest][vitest.dev]][vitest-url]
* Tailwindcss [![TailwindCSS][tailwindcss.com]][tailwindcss-url]
* Vite [![Vite][vite.dev]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AntonioIonica/shopping_cart_tests
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
4. Start the project
   ```sh
   npm run dev
   ```
5. Run the tests
  ```sh
  npm run test
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The main goal of the project was to learn how to run/write tests, specifically Vitest framework


<p align="right">(<a href="#readme-top">back to top</a>)</p>



See the [open issues](https://github.com/AntonioIonica/shopping_cart_tests/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

-

<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@X](https://twitter.com/AntonioIonica) - antonioionica@gmail.com

Project Link: [Github](https://github.com/AntonioIonica/shopping_cart_tests)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* I used the api of (https://fakestoreapi.com/products) to get samples of products


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AntonioIonica/shopping_cart_tests.svg?style=for-the-badge
[contributors-url]: https://github.com/AntonioIonica/shopping_cart_tests/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AntonioIonica/shopping_cart_tests.svg?style=for-the-badge
[forks-url]: https://github.com/AntonioIonica/shopping_cart_tests/network/members
[stars-shield]: https://img.shields.io/github/stars/AntonioIonica/shopping_cart_tests.svg?style=for-the-badge
[stars-url]: https://github.com/AntonioIonica/shopping_cart_tests/stargazers
[issues-shield]: https://img.shields.io/github/issues/AntonioIonica/shopping_cart_tests.svg?style=for-the-badge
[issues-url]: https://github.com/AntonioIonica/shopping_cart_tests/issues
[license-shield]: https://img.shields.io/github/license/AntonioIonica/shopping_cart_tests.svg?style=for-the-badge
[license-url]: https://github.com/AntonioIonica/shopping_cart_tests/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/antonio-iulian-ionica-478074353/
<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[react.dev]: https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB
[React-url]: https://react.dev 
[tailwindcss.com]: https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://www.tailwindcss.com/
[vite.dev]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff
[Vite-url]: https://vite.dev