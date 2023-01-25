create TABLE person(
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(255)
);

create TABLE book(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    mark VARCHAR(3),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);