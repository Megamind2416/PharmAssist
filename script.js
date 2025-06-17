const patients = [
  {
    id: "CA",
    firstName: "Chiamaka",
    lastName: "Adebayo",
    age: 45,
    gender: "Female",
    phone: "+234 802 123 4567",
    email: "chiamaka.adebayo@example.com",
    bloodType: "A+",
    height: "165 cm",
    weight: "68 kg",
    allergies: "Penicillin, Sulfa drugs",
    conditions: "Hypertension, Type 2 Diabetes",
    bloodPressure: "132/82 mmHg",
    medications: [
      {
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        instructions: "Take in the morning",
        startDate: "2025-01-15",
        adherence: 95,
      },
      {
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        instructions: "Take with meals",
        startDate: "2025-01-15",
        adherence: 82,
      },
    ],
    consultations: [
      {
        date: "2025-06-15",
        duration: "25 min",
        summary: "Follow-up for hypertension management",
        notes: [
          "Patient reports blood pressure readings averaging 130/80",
          "No side effects from current medications",
          "Encouraged to continue lifestyle modifications",
          "Next follow-up in 3 months",
        ],
      },
      {
        date: "2025-05-10",
        duration: "20 min",
        summary: "Routine medication review",
        notes: [
          "Patient doing well on current regimen",
          "Adherence to medications is good",
          "Reviewed blood glucose logs - well controlled",
        ],
      },
    ],
  },
  {
    id: "OO",
    firstName: "Obinna",
    lastName: "Okafor",
    age: 34,
    gender: "Male",
    phone: "+234 803 987 6543",
    email: "obinna.okafor@example.com",
    bloodType: "O-",
    height: "178 cm",
    weight: "72 kg",
    allergies: "None",
    conditions: "Migraine, Anxiety",
    bloodPressure: "118/76 mmHg",
    medications: [
      {
        name: "Sumatriptan",
        dosage: "50mg",
        frequency: "As needed",
        instructions: "Take at onset of migraine",
        startDate: "2025-03-20",
        adherence: 78,
      },
      {
        name: "Sertraline",
        dosage: "50mg",
        frequency: "Once daily",
        instructions: "Take in the morning",
        startDate: "2024-11-05",
        adherence: 92,
      },
    ],
    consultations: [
      {
        date: "2025-06-10",
        duration: "30 min",
        summary: "Migraine management",
        notes: [
          "Patient reports 2 migraines per month",
          "Sumatriptan effective but causes drowsiness",
          "Discussed trigger management strategies",
          "Will consider preventive therapy if frequency increases",
        ],
      },
    ],
  },
  {
    id: "NE",
    firstName: "Ngozi",
    lastName: "Eze",
    age: 42,
    gender: "Female",
    phone: "+234 805 555 0123",
    email: "ngozi.eze@example.com",
    bloodType: "B+",
    height: "162 cm",
    weight: "75 kg",
    allergies: "Latex",
    conditions: "Hyperlipidemia, GERD",
    bloodPressure: "125/80 mmHg",
    medications: [
      {
        name: "Atorvastatin",
        dosage: "20mg",
        frequency: "Once daily",
        instructions: "Take at bedtime",
        startDate: "2025-02-10",
        adherence: 68,
      },
      {
        name: "Omeprazole",
        dosage: "20mg",
        frequency: "Once daily",
        instructions: "Take before breakfast",
        startDate: "2024-09-15",
        adherence: 95,
      },
    ],
    consultations: [
      {
        date: "2025-06-12",
        duration: "15 min",
        summary: "New prescription for seasonal allergies",
        notes: [
          "Patient reports seasonal allergy symptoms",
          "Prescribed loratadine 10mg daily",
          "Advised to monitor symptoms",
          "Follow-up if no improvement in 2 weeks",
        ],
      },
      {
        date: "2025-05-05",
        duration: "20 min",
        summary: "Lipid panel review",
        notes: [
          "LDL decreased from 140 to 90 on current therapy",
          "Encouraged to continue medication and diet",
          "Next lipid panel in 6 months",
        ],
      },
    ],
  },
  {
    id: "YE",
    firstName: "Yusuf",
    lastName: "Emeka",
    age: 38,
    gender: "Male",
    phone: "+234 807 123 4567",
    email: "yusuf.emeka@example.com",
    bloodType: "AB+",
    height: "175 cm",
    weight: "80 kg",
    allergies: "Shellfish",
    conditions: "Peptic Ulcer Disease",
    bloodPressure: "120/78 mmHg",
    medications: [
      {
        name: "Omeprazole",
        dosage: "40mg",
        frequency: "Once daily",
        instructions: "Take before breakfast",
        startDate: "2025-03-01",
        adherence: 88,
      },
      {
        name: "Amoxicillin",
        dosage: "500mg",
        frequency: "Twice daily",
        instructions: "Take with plenty of water",
        startDate: "2025-03-01",
        adherence: 95,
      },
    ],
    consultations: [
      {
        date: "2025-06-18",
        duration: "20 min",
        summary: "Follow-up for ulcer treatment",
        notes: [
          "Patient reports significant improvement in symptoms",
          "No adverse effects from medications",
          "Advice given to avoid spicy foods",
          "Follow-up in 4 weeks",
        ],
      },
    ],
  },
];

const consultations = [
  {
    id: 1,
    patientId: "RC",
    date: "June 15, 2025",
    duration: "25 min",
    pharmacist: "Dr. Emily Johnson",
    notes: [
      "Patient reports blood pressure readings averaging 130/80",
      "No side effects from current medications",
      "Encouraged to continue lifestyle modifications",
      "Next follow-up in 3 months",
    ],
  },
  {
    id: 2,
    patientId: "AF",
    date: "June 14, 2025",
    duration: "15 min",
    pharmacist: "Dr. Sarah Lee",
    notes: [
      "Patient reports seasonal allergy symptoms",
      "Prescribed loratadine 10mg daily",
      "Advised to monitor symptoms",
      "Follow-up if no improvement in 2 weeks",
    ],
  },
  {
    id: 3,
    patientId: "LA",
    date: "June 12, 2025",
    duration: "30 min",
    pharmacist: "Dr. Emily Johnson",
    notes: [
      "Patient reports 2 migraines per month",
      "Sumatriptan effective but causes drowsiness",
      "Discussed trigger management strategies",
      "Will consider preventive therapy if frequency increases",
    ],
  },
];

let isRecording = false;
let currentUser = null;
let currentPatient = null;

document.addEventListener("DOMContentLoaded", function () {
  console.log("PharmAssist Demo Loaded");
  currentUser = { name: "Dr. Johnson", email: "demo@pharmassist.com" };
  showDashboard();
  populatePatientsTable();
});

function showDashboard() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "flex";
  document.getElementById("dashboard").classList.add("active");
}

function logout() {
  currentUser = null;
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("dashboard").classList.remove("active");
  switchSection("overview");
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}

// Navigation functionality
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all menu items
    document.querySelectorAll(".menu-item").forEach((menuItem) => {
      menuItem.classList.remove("active");
    });

    // Add active class to clicked item
    this.classList.add("active");

    // Get section name
    const section = this.getAttribute("data-section");
    switchSection(section);

    // Close sidebar on mobile after clicking a menu item
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  });
});

function switchSection(sectionName) {
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active");
  });

  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  const titles = {
    overview: "Overview",
    patients: "Patients",
    patientProfile: "Patient Profile",
    consultations: "AI Consultations",
    medications: "Medication Tracker",
    reminders: "Smart Reminders",
    insights: "AI Insights",
    records: "Medical Records",
    settings: "Settings",
  };

  document.getElementById("pageTitle").textContent =
    titles[sectionName] || "PharmAssist";
}

function loadPatientProfile(patientId) {
  currentPatient = patients.find((p) => p.id === patientId);
  if (!currentPatient) return;

  document.getElementById("profileAvatar").textContent = patientId;
  document.getElementById(
    "profileName"
  ).textContent = `${currentPatient.firstName} ${currentPatient.lastName}`;
  document.getElementById(
    "profileAge"
  ).textContent = `${currentPatient.age} years`;
  document.getElementById("profileGender").textContent = currentPatient.gender;
  document.getElementById("profileContact").textContent = currentPatient.phone;

  document.getElementById("bloodType").textContent = currentPatient.bloodType;
  document.getElementById("height").textContent = currentPatient.height;
  document.getElementById("weight").textContent = currentPatient.weight;
  document.getElementById("allergies").textContent = currentPatient.allergies;
  document.getElementById("conditions").textContent = currentPatient.conditions;
  document.getElementById("bloodPressure").textContent =
    currentPatient.bloodPressure;

  const medicationsContainer = document.getElementById("currentMedications");
  medicationsContainer.innerHTML = "";
  currentPatient.medications.forEach((med) => {
    const medElement = document.createElement("div");
    medElement.className = "medication-item";
    medElement.innerHTML = `
      <div>
        <div class="medication-name">${med.name}</div>
        <div class="medication-details">${med.dosage} • ${med.frequency} • ${
      med.instructions
    }</div>
      </div>
      <div class="adherence-score" style="background: ${
        med.adherence > 80
          ? "#4caf50"
          : med.adherence > 60
          ? "#ff9800"
          : "#f44336"
      }">${med.adherence}%</div>
    `;
    medicationsContainer.appendChild(medElement);
  });

  const consultationsContainer = document.getElementById("consultationHistory");
  consultationsContainer.innerHTML = "";
  currentPatient.consultations.forEach((consult) => {
    const consultElement = document.createElement("div");
    consultElement.className = "consultation-item";
    consultElement.innerHTML = `
      <div class="consultation-date">${formatDate(consult.date)}</div>
      <div class="consultation-summary">${consult.summary}</div>
      <div class="consultation-duration">${consult.duration}</div>
    `;
    consultationsContainer.appendChild(consultElement);
  });

  switchSection("patientProfile");
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function startConsultation() {
  if (!currentPatient) return;

  switchSection("consultations");

  const transcript = document.getElementById("transcript");
  transcript.innerHTML = `Starting consultation with ${currentPatient.firstName} ${currentPatient.lastName}. Click "Start Recording" to begin.`;
}

function sendReminder() {
  if (!currentPatient) return;

  alert(
    `Reminder sent to ${currentPatient.firstName} ${currentPatient.lastName} at ${currentPatient.phone}`
  );
}

function populatePatientsTable() {
  const tableBody = document.getElementById("patientsTable");
  tableBody.innerHTML = "";

  patients.forEach((patient) => {
    const row = document.createElement("tr");
    row.onclick = () => loadPatientProfile(patient.id);
    row.style.cursor = "pointer";

    row.innerHTML = `
      <td>
        <div class="patient-info">
          <div class="patient-avatar">${patient.id}</div>
          <div class="patient-details">
            <div class="patient-name">${patient.firstName} ${
      patient.lastName
    }</div>
            <div class="patient-age">${patient.age} years</div>
          </div>
        </div>
      </td>
      <td>${patient.age} years</td>
      <td>${formatDate(new Date().toISOString().split("T")[0])}</td>
      <td>${patient.conditions}</td>
      <td>${patient.medications.map((m) => m.name).join(", ")}</td>
      <td><span class="status-badge status-completed">Active</span></td>
      <td><button class="action-btn" onclick="event.stopPropagation();">⋯</button></td>
    `;

    tableBody.appendChild(row);
  });
}

function searchPatients() {
  const searchTerm = document
    .getElementById("patientSearch")
    .value.toLowerCase();
  const rows = document.querySelectorAll("#patientsTable tr");

  rows.forEach((row) => {
    const name = row.querySelector(".patient-name").textContent.toLowerCase();
    const conditions = row
      .querySelector("td:nth-child(4)")
      .textContent.toLowerCase();
    const medications = row
      .querySelector("td:nth-child(5)")
      .textContent.toLowerCase();

    if (name.includes(searchTerm)) {
      row.style.display = "";
    } else if (conditions.includes(searchTerm)) {
      row.style.display = "";
    } else if (medications.includes(searchTerm)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function showAddPatientModal() {
  document.getElementById("addPatientModal").style.display = "block";
}

function showAddMedicationModal() {
  document.getElementById("addMedicationModal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function viewConsultation(consultId) {
  const consultation = consultations.find((c) => c.id === consultId);
  if (!consultation) return;

  const patient = patients.find((p) => p.id === consultation.patientId);

  document.getElementById("consultPatient").textContent = patient
    ? `${patient.firstName} ${patient.lastName}`
    : "Unknown Patient";
  document.getElementById("consultDate").textContent = consultation.date;
  document.getElementById("consultDuration").textContent =
    consultation.duration;
  document.getElementById("consultPharmacist").textContent =
    consultation.pharmacist;

  const notesContainer = document.getElementById("consultNotes");
  notesContainer.innerHTML = "";
  consultation.notes.forEach((note) => {
    const noteElement = document.createElement("p");
    noteElement.textContent = note;
    notesContainer.appendChild(noteElement);
  });

  document.getElementById("consultationModal").style.display = "block";
}

function toggleRecording() {
  const button = document.querySelector(".record-btn");
  const transcript = document.getElementById("transcript");

  if (!isRecording) {
    isRecording = true;
    button.textContent = "⏹️ Stop Recording";
    button.classList.add("recording");

    transcript.textContent =
      "Recording... AI is transcribing your speech in real-time.";

    setTimeout(() => {
      transcript.innerHTML = `
                <strong>Live Transcription:</strong><br>
                "Patient presents with headache lasting three days. Pain is described as throbbing, located in temples. 
                No fever, no nausea. Patient reports stress at work. Blood pressure normal. 
                Recommending over-the-counter pain relief and stress management techniques. 
                Follow-up in one week if symptoms persist."
            `;
    }, 2000);
  } else {
    isRecording = false;
    button.textContent = "🎙️ Start Recording";
    button.classList.remove("recording");
    transcript.textContent =
      "Recording completed. AI-generated notes have been saved to patient record.";
  }
}

function filterAppointments(filter) {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  event.target.classList.add("active");

  console.log("Filtering appointments by:", filter);
}

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
  if (
    window.innerWidth <= 768 &&
    !event.target.closest(".sidebar") &&
    !event.target.closest(".hamburger")
  ) {
    document.querySelector(".sidebar").classList.remove("active");
  }
};
