CREATE TABLE Guests_Schedule (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guest_id INTEGER NOT NULL,
    schedule_id INTEGER NOT NULL,
    FOREIGN KEY (guest_id) REFERENCES Guests(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (schedule_id) REFERENCES Schedule(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
