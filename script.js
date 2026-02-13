
const event_form = document.getElementById('eventform');
const Event_title = document.getElementById('eventTitle');
const Event_date = document.getElementById('eventDate');
const Event_category = document.getElementById('eventCategory');
const Event_description = document.getElementById('eventDescription');
const clearAllBtn = document.getElementById("clearEvents");
const addSampleBtn = document.getElementById("sampleEvents");
const eventContainer = document.getElementById("eventsContainer");
const demoContent = document.getElementById("democontent");



let sampleEvent = [
    {
        title: "WEB DEV",
        date: "2026-02-21",
        category: "Conference",
        description: "A deep dive into modern web development."
    },
    {
        title: "PYTHON",
        date: "2026-03-15",
        category: "Meetup",
        description: "Community meetup for Python enthusiasts."
    }
];

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(addEvent);
});



function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div class="date">${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    return card;
}



function addEvent(eventData) {

    const emptyState = eventContainer.querySelector(".empty-text");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}



event_form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!Event_title.value || !Event_date.value || !Event_description.value) {
        return;
    }

    const eventData = {
        title: Event_title.value,
        date: Event_date.value,
        category: Event_category.value,
        description: Event_description.value
    };

    addEvent(eventData);
    event_form.reset();
});



eventContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".event-card");

    if (event.target.classList.contains("delete-btn")) {
        card.remove();
    }

    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML = `
            <p class="empty-text">No events yet. Add your first event!</p>
        `;
    }
});



clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `
        <p class="empty-text">No events yet. Add your first event!</p>
    `;
});


document.addEventListener("keydown", (event) => {
    demoContent.innerHTML = `
        <p>You Pressed: <strong>${event.key}</strong></p>
    `;

    demoContent.style.background = "#dbeafe";
    demoContent.style.transition = "0.3s ease";

    setTimeout(() => {
        demoContent.style.background = "";
    }, 300);
});
