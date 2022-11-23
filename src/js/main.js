// Import our custom CSS
import '../scss/styles.scss';

// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

import axios from 'axios';

import { useSWR } from 'swr';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});
