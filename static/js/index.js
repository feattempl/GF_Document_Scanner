const fileInput = document.getElementById('fileInput');
const scanBtn = document.getElementById('scanBtn');
const preview = document.getElementById('preview');
const loader = document.getElementById('loader');
const errorDiv = document.getElementById('error');

let selectedFile = null;

fileInput.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        selectedFile = e.target.files[0];
        scanBtn.disabled = false;
        
        const reader = new FileReader();
        reader.onload = function(event) {
            preview.innerHTML = `
                <div>
                    <h3>Оригинал</h3>
                    <img src="${event.target.result}" alt="Original">
                </div>
            `;
        };
        reader.readAsDataURL(selectedFile);
    }
});

async function scanDocument() {
    if (!selectedFile) return;
    
    const formData = new FormData();
    formData.append('file', selectedFile);
    
    scanBtn.disabled = true;
    loader.style.display = 'block';
    errorDiv.innerHTML = '';
    
    try {
        const response = await fetch('/scan', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            preview.innerHTML += `
                <div>
                    <h3>Скан</h3>
                    <img src="${data.result_url}" alt="Scanned">
                </div>
            `;
        } else {
            errorDiv.innerHTML = `<p>Ошибка: ${data.error}</p>`;
        }
    } catch (err) {
        errorDiv.innerHTML = `<p>Ошибка сервера: ${err.message}</p>`;
    } finally {
        loader.style.display = 'none';
        scanBtn.disabled = false;
    }
}