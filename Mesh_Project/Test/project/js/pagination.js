// Pagination functionality

class PaginatedTable {
  constructor(config) {
    this.tableBodyId = config.tableBodyId;
    this.paginationId = config.paginationId;
    this.paginationInfoId = config.paginationInfoId;
    this.prevBtnId = config.prevBtnId;
    this.nextBtnId = config.nextBtnId;
    this.data = config.data;
    this.renderRow = config.renderRow;
    this.itemsPerPage = config.itemsPerPage || 4;
    this.currentPage = 1;
    
    this.tableBody = document.getElementById(this.tableBodyId);
    this.paginationContainer = document.getElementById(this.paginationId);
    this.paginationInfo = document.getElementById(this.paginationInfoId);
    this.prevBtn = document.getElementById(this.prevBtnId);
    this.nextBtn = document.getElementById(this.nextBtnId);
    
    this.init();
  }
  
  init() {
    this.renderTable();
    this.renderPagination();
    this.updatePaginationInfo();
    this.setupEventListeners();
  }
  
  renderTable() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const currentPageData = this.data.slice(startIndex, endIndex);
    
    this.tableBody.innerHTML = '';
    
    currentPageData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = this.renderRow(item);
      this.tableBody.appendChild(row);
    });
    
    // Initialize Lucide icons in the newly rendered rows
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
  
  renderPagination() {
    const pageCount = Math.ceil(this.data.length / this.itemsPerPage);
    this.paginationContainer.innerHTML = '';
    
    for (let i = 1; i <= pageCount; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.classList.add('pagination-button');
      if (i === this.currentPage) {
        pageBtn.classList.add('active');
      }
      pageBtn.textContent = i;
      pageBtn.addEventListener('click', () => this.goToPage(i));
      this.paginationContainer.appendChild(pageBtn);
    }
    
    this.updatePaginationControls(pageCount);
  }
  
  updatePaginationControls(pageCount) {
    this.prevBtn.disabled = this.currentPage === 1;
    this.nextBtn.disabled = this.currentPage === pageCount;
  }
  
  updatePaginationInfo() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.data.length);
    this.paginationInfo.textContent = `Showing ${startIndex}-${endIndex} of ${this.data.length} entries`;
  }
  
  setupEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      if (this.currentPage > 1) {
        this.goToPage(this.currentPage - 1);
      }
    });
    
    this.nextBtn.addEventListener('click', () => {
      const pageCount = Math.ceil(this.data.length / this.itemsPerPage);
      if (this.currentPage < pageCount) {
        this.goToPage(this.currentPage + 1);
      }
    });
  }
  
  goToPage(page) {
    this.currentPage = page;
    this.renderTable();
    this.renderPagination();
    this.updatePaginationInfo();
  }
}

// Initialize pagination after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Dashboard users table
  const dashboardTable = new PaginatedTable({
    tableBodyId: 'dashboard-table-body',
    paginationId: 'dashboard-pagination',
    paginationInfoId: 'dashboard-pagination-info',
    prevBtnId: 'dashboard-prev-btn',
    nextBtnId: 'dashboard-next-btn',
    data: userData,
    itemsPerPage: 4,
    renderRow: (user) => {
      return `
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/${user.id % 2 === 0 ? 'women' : 'men'}/${user.id}.jpg" alt="">
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">${user.name}</div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">${user.title}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          ${getStatusBadge(user.status, user.statusColor)}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${user.role}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          ${getUserActionButtons()}
        </td>
      `;
    }
  });
  
  // Users section table
  const usersTable = new PaginatedTable({
    tableBodyId: 'users-table-body',
    paginationId: 'users-pagination',
    paginationInfoId: 'users-pagination-info',
    prevBtnId: 'users-prev-btn',
    nextBtnId: 'users-next-btn',
    data: userData,
    itemsPerPage: 4,
    renderRow: (user) => {
      return `
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/${user.id % 2 === 0 ? 'women' : 'men'}/${user.id}.jpg" alt="">
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">${user.name}</div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">${user.email}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          ${getStatusBadge(user.status, user.statusColor)}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${user.lastLogin}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          ${getUserActionButtons()}
        </td>
      `;
    }
  });
  
  // Products section table
  const productsTable = new PaginatedTable({
    tableBodyId: 'products-table-body',
    paginationId: 'products-pagination',
    paginationInfoId: 'products-pagination-info',
    prevBtnId: 'products-prev-btn',
    nextBtnId: 'products-next-btn',
    data: productData,
    itemsPerPage: 4,
    renderRow: (product) => {
      return `
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">${product.name}</div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">${product.category}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">${product.price}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
            ${product.stock}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          ${getProductActionButtons()}
        </td>
      `;
    }
  });
});