function Footer() {

    return (
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} 홍성원 All Rights Reserved. </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                  <img src="/tour.png" />
                </li>
                <li>
                  <img src="/travel.jpg" />
                </li>
            </ul>
          </div>
      </footer>
    );
  }
  
  export default Footer;
  