let cart = JSON.parse(localStorage.getItem('mini_pos_cart')) || [];
let appliedDiscountRate = 0;

const form = document.getElementById('productForm');
const itemNameInput = document.getElementById('itemName');
const itemPriceInput = document.getElementById('itemPrice');
const itemQtyInput = document.getElementById('itemQty');

const errorName = document.getElementById('errorName');
const errorPrice = document.getElementById('errorPrice');
const errorQty = document.getElementById('errorQty');

const cartTableBody = document.getElementById('cartTableBody');
const txtSubtotalSum = document.getElementById('txtSubtotalSum');
const txtDiscount = document.getElementById('txtDiscount');
const txtGrandTotal = document.getElementById('txtGrandTotal');
const cashAmountInput = document.getElementById('cashAmount');
const txtChange = document.getElementById('txtChange');
const changeContainer = document.getElementById('changeContainer');
const btnReset = document.getElementById('btnReset');
const promoCodeInput = document.getElementById('promoCode');
const btnApplyPromo = document.getElementById('btnApplyPromo');

function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

function renderApp() {
    cartTableBody.innerHTML = '';
    let totalBelanja = 0;

    if (cart.length === 0) {
        cartTableBody.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-slate-400">Keranjang masih kosong</td></tr>`;
    } else {
        cart.forEach((item, index) => {
            let subtotal = item.price * item.qty;
            totalBelanja += subtotal;

            let row = document.createElement('tr');
            row.className = "border-b border-slate-100 hover:bg-slate-50 transition-colors";
            row.innerHTML = `
                <td class="py-3 px-2 text-slate-500">${index + 1}</td>
                <td class="py-3 px-2 font-medium text-slate-700">${item.name}</td>
                <td class="py-3 px-2 text-slate-600">${formatRupiah(item.price)}</td>
                <td class="py-3 px-2 text-slate-600">${item.qty}</td>
                <td class="py-3 px-2 font-semibold text-slate-800">${formatRupiah(subtotal)}</td>
                <td class="py-3 px-2 text-center">
                    <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2 py-1 rounded text-xs transition-colors cursor-pointer">Hapus</button>
                </td>
            `;
            cartTableBody.appendChild(row);
        });
    }

    if (totalBelanja >= 50000 || appliedDiscountRate > 0) {
        if (appliedDiscountRate === 0) appliedDiscountRate = 0.1;
    } else {
        appliedDiscountRate = 0;
    }

    let discountAmount = totalBelanja * appliedDiscountRate;
    let grandTotal = totalBelanja - discountAmount;

    txtSubtotalSum.textContent = formatRupiah(totalBelanja);
    txtDiscount.textContent = `- ${formatRupiah(discountAmount)} (${appliedDiscountRate * 100}%)`;
    txtGrandTotal.textContent = formatRupiah(grandTotal);

    let cash = parseFloat(cashAmountInput.value) || 0;
    if (cash > 0) {
        let change = cash - grandTotal;
        if (change >= 0) {
            txtChange.textContent = formatRupiah(change);
            changeContainer.className = "p-3 bg-emerald-50 text-emerald-800 rounded-xl flex justify-between items-center text-sm";
        } else {
            txtChange.textContent = `Kurang ${formatRupiah(Math.abs(change))}`;
            changeContainer.className = "p-3 bg-rose-50 text-rose-800 rounded-xl flex justify-between items-center text-sm";
        }
    } else {
        txtChange.textContent = formatRupiah(0);
        changeContainer.className = "p-3 bg-slate-50 rounded-xl flex justify-between items-center text-sm";
    }

    localStorage.setItem('mini_pos_cart', JSON.stringify(cart));
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = itemNameInput.value.trim();
    let price = parseFloat(itemPriceInput.value);
    let qty = parseInt(itemQtyInput.value);
    let isValid = true;

    if (name.length < 3) {
        errorName.textContent = "Nama barang minimal 3 karakter.";
        errorName.classList.remove('hidden');
        isValid = false;
    } else {
        errorName.classList.add('hidden');
    }

    if (isNaN(price) || price < 500) {
        errorPrice.textContent = "Harga satuan wajib minimal Rp 500.";
        errorPrice.classList.remove('hidden');
        isValid = false;
    } else {
        errorPrice.classList.add('hidden');
    }

    if (isNaN(qty) || qty < 1) {
        errorQty.textContent = "Jumlah barang minimal 1.";
        errorQty.classList.remove('hidden');
        isValid = false;
    } else {
        errorQty.classList.add('hidden');
    }

    if (isValid) {
        cart.push({ name, price, qty });
        renderApp();
        form.reset();
        itemQtyInput.value = "1";
    }
});

function removeItem(index) {
    cart.splice(index, 1);
    renderApp();
}

btnReset.addEventListener('click', function () {
    if (confirm("Yakin ingin mengosongkan keranjang belanja?")) {
        cart = [];
        appliedDiscountRate = 0;
        localStorage.removeItem('mini_pos_cart');
        cashAmountInput.value = '';
        promoCodeInput.value = '';
        renderApp();
    }
});

btnApplyPromo.addEventListener('click', function () {
    let code = promoCodeInput.value.trim().toUpperCase();
    if (code === "HEMAT10") {
        appliedDiscountRate = 0.1;
        alert("Kode promo HEMAT10 berhasil digunakan (Diskon 10%)!");
        renderApp();
    } else {
        alert("Kode promo tidak valid atau kadaluarsa.");
    }
});

cashAmountInput.addEventListener('input', renderApp);
renderApp();
