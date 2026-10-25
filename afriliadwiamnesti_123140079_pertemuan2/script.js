// --- 1. CLASS MODEL (Sesuai Panduan Arsitektur) ---
class TaskItem {
    constructor(id, title, date, priority, completed = false) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.completed = completed;
    }
}

// --- 2. CLASS UTAMA DASHBOARD ---
class DashboardApp {
    constructor() {
        // Menggunakan let dan const secara tepat
        this.tasks = JSON.parse(localStorage.getItem('student_dashboard_tasks')) || [];
        this.init();
    }

    init() {
        this.loadInitialAPI();
        this.setupEventListeners();
        this.renderTasks();
    }

    // --- FITUR ES6+: Arrow Functions & Async/Await (API Publik) ---
    loadInitialAPI = async () => {
        try {
            // Fetch Cuaca Open-Meteo ITERA (Lampung Selatan)
            const weatherRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-5.36&longitude=105.31&current_weather=true');
            const weatherData = await weatherRes.json();
            const weatherEl = document.getElementById('weatherWidget');
            weatherEl.innerHTML = `📍 Kampus ITERA: <b>${weatherData.current_weather.temperature}°C</b> (${weatherData.current_weather.windspeed} km/h)`;

            // Fetch Kutipan Harian DummyJSON
            const quoteRes = await fetch('https://dummyjson.com/quotes/random');
            const quoteData = await quoteRes.json();
            const quoteEl = document.getElementById('quoteContainer');
            quoteEl.textContent = `"${quoteData.quote}" — ${quoteData.author}`;
        } catch (error) {
            console.error("Gagal memuat data API:", error);
        }
    }

    setupEventListeners = () => {
        const form = document.getElementById('taskForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddTask();
        });
    }

    // --- MANAJEMEN STATE & LOCALSTORAGE (Immutable dengan Spread Operator) ---
    handleAddTask = () => {
        const titleInput = document.getElementById('taskTitle');
        const dateInput = document.getElementById('taskDate');
        const priorityInput = document.getElementById('taskPriority');

        const newTask = new TaskItem(Date.now(), titleInput.value, dateInput.value, priorityInput.value);
        
        // Menggunakan spread operator untuk immutability state array
        this.tasks = [...this.tasks, newTask];
        this.saveAndRender();
        
        titleInput.value = '';
        dateInput.value = '';
    }

    // Menggunakan Destructuring pada parameter fungsi
    toggleTaskStatus = ({ id }) => {
        this.tasks = this.tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        this.saveAndRender();
    }

    deleteTask = (id) => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveAndRender();
    }

    saveAndRender = () => {
        localStorage.setItem('student_dashboard_tasks', JSON.stringify(this.tasks));
        this.renderTasks();
    }

    // --- FITUR ES6+: Template Literals untuk Rendering Dinamis ---
    renderTasks = () => {
        const tbody = document.getElementById('taskTableBody');
        const countEl = document.getElementById('taskCount');
        tbody.innerHTML = '';

        countEl.textContent = `${this.tasks.length} Tugas`;

        if (this.tasks.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" class="text-center py-6 text-slate-400">Belum ada tugas kuliah tersimpan.</td></tr>`;
            return;
        }

        this.tasks.forEach(task => {
            const row = document.createElement('tr');
            row.className = "border-b border-slate-100 hover:bg-slate-50 transition-colors";
            
            // Template Literals dinamis
            row.innerHTML = `
                <td class="py-3 px-2">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                        class="w-4 h-4 text-indigo-600 rounded cursor-pointer" 
                        onchange="app.toggleTaskStatus({ id: ${task.id} })">
                </td>
                <td class="py-3 px-2 font-medium ${task.completed ? 'line-through text-slate-400' : 'text-slate-700'}">${task.title}</td>
                <td class="py-3 px-2 text-slate-600 text-xs">${task.date}</td>
                <td class="py-3 px-2">
                    <span class="px-2 py-1 rounded text-xs font-semibold ${
                        task.priority === 'Tinggi' ? 'bg-rose-50 text-rose-600' : 
                        task.priority === 'Sedang' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                    }">${task.priority}</span>
                </td>
                <td class="py-3 px-2 text-center">
                    <button onclick="app.deleteTask(${task.id})" class="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2 py-1 rounded text-xs transition-colors cursor-pointer">Hapus</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Inisialisasi Aplikasi Dashboard
const app = new DashboardApp();
