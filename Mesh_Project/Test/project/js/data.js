// Dummy data for the dashboard

// User data for all tables
const userData = [
  {
    id: 1,
    name: 'Alex Johnson',
    title: 'Frontend Developer',
    email: 'alex@example.com',
    status: 'Active',
    statusColor: 'green',
    role: 'Developer',
    lastLogin: '2 hours ago'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    title: 'UX Designer',
    email: 'sarah@example.com',
    status: 'Active',
    statusColor: 'green',
    role: 'Designer',
    lastLogin: '1 day ago'
  },
  {
    id: 3,
    name: 'Michael Brown',
    title: 'Backend Developer',
    email: 'michael@example.com',
    status: 'Inactive',
    statusColor: 'red',
    role: 'Developer',
    lastLogin: '5 days ago'
  },
  {
    id: 4,
    name: 'Emily Davis',
    title: 'Project Manager',
    email: 'emily@example.com',
    status: 'Active',
    statusColor: 'green',
    role: 'Manager',
    lastLogin: '3 hours ago'
  },
  {
    id: 5,
    name: 'David Wilson',
    title: 'DevOps Engineer',
    email: 'david@example.com',
    status: 'On Leave',
    statusColor: 'yellow',
    role: 'Engineer',
    lastLogin: '1 week ago'
  },
  {
    id: 6,
    name: 'Jessica Taylor',
    title: 'Content Strategist',
    email: 'jessica@example.com',
    status: 'Active',
    statusColor: 'green',
    role: 'Marketing',
    lastLogin: '2 days ago'
  },
  {
    id: 7,
    name: 'Ryan Martinez',
    title: 'Full Stack Developer',
    email: 'ryan@example.com',
    status: 'Active',
    statusColor: 'green',
    role: 'Developer',
    lastLogin: '5 hours ago'
  },
  {
    id: 8,
    name: 'Jennifer Anderson',
    title: 'QA Engineer',
    email: 'jennifer@example.com',
    status: 'Inactive',
    statusColor: 'red',
    role: 'QA',
    lastLogin: '2 weeks ago'
  }
];

// Product data
const productData = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '$149.99',
    stock: 24
  },
  {
    id: 2,
    name: 'Smartphone X3',
    category: 'Electronics',
    price: '$899.99',
    stock: 15
  },
  {
    id: 3,
    name: 'Coffee Maker Pro',
    category: 'Home Appliances',
    price: '$79.99',
    stock: 32
  },
  {
    id: 4,
    name: 'Ergonomic Chair',
    category: 'Furniture',
    price: '$249.99',
    stock: 8
  },
  {
    id: 5,
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    price: '$299.99',
    stock: 19
  },
  {
    id: 6,
    name: 'Laptop Ultra Slim',
    category: 'Computers',
    price: '$1299.99',
    stock: 7
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: '$89.99',
    stock: 42
  },
  {
    id: 8,
    name: 'Digital Camera 4K',
    category: 'Photography',
    price: '$549.99',
    stock: 11
  }
];

// Function to get status badge HTML
function getStatusBadge(status, color) {
  const colorClasses = {
    'green': 'bg-green-100 text-green-800',
    'red': 'bg-red-100 text-red-800',
    'yellow': 'bg-yellow-100 text-yellow-800'
  };
  
  return `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClasses[color]}">
    ${status}
  </span>`;
}

// Function to get action buttons HTML
function getUserActionButtons() {
  return `
    <div class="flex space-x-2">
      <button class="text-blue-600 hover:text-blue-900">
        <i data-lucide="edit-2" class="w-4 h-4"></i>
      </button>
      <button class="text-red-600 hover:text-red-900">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

function getProductActionButtons() {
  return `
    <div class="flex space-x-2">
      <button class="text-blue-600 hover:text-blue-900">
        <i data-lucide="edit-2" class="w-4 h-4"></i>
      </button>
      <button class="text-green-600 hover:text-green-900">
        <i data-lucide="eye" class="w-4 h-4"></i>
      </button>
      <button class="text-red-600 hover:text-red-900">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}