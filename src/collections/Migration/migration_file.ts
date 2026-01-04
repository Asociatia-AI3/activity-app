import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-mysql'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(`
    /* USERS & ROLES */
    CREATE TABLE roles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) UNIQUE NOT NULL
    );

    CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );

    CREATE TABLE users_roles (
      user_id INT,
      role_id INT,
      PRIMARY KEY (user_id, role_id),
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (role_id) REFERENCES roles(id)
    );

    /* MEMBERS */
    CREATE TABLE members (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type ENUM('vot', 'aspirant', 'fondator', 'onoare'),
      user_id INT UNIQUE,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    /* INITIATIVES */
    CREATE TABLE initiatives (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      description TEXT,
      site_link VARCHAR(255)
    );

    /* MEETINGS */
    CREATE TABLE meetings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      date DATETIME,
      venue VARCHAR(255),
      type ENUM('sedinta', 'workshop', 'prezentare'),
      presenter_id INT,
      FOREIGN KEY (presenter_id) REFERENCES members(id)
    );

    /* CODER DOJO */
    CREATE TABLE ninjas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      child_name VARCHAR(255),
      age INT,
      guardian_name VARCHAR(255),
      guardian_email VARCHAR(255),
      guardian_phone VARCHAR(50),
      safety_agreement BOOLEAN,
      photo_agreement BOOLEAN
    );

    CREATE TABLE mentors (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      bio TEXT,
      user_id INT UNIQUE,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    /* FESTIVAL */
    CREATE TABLE festival_editions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      year INT,
      title VARCHAR(255),
      theme VARCHAR(255),
      description TEXT
    );

    CREATE TABLE festival_sections (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      edition_id INT,
      FOREIGN KEY (edition_id) REFERENCES festival_editions(id)
    );

    CREATE TABLE locations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      address TEXT,
      capacity INT,
      edition_id INT,
      FOREIGN KEY (edition_id) REFERENCES festival_editions(id)
    );

    CREATE TABLE guests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      organization VARCHAR(255),
      website VARCHAR(255),
      edition_id INT,
      FOREIGN KEY (edition_id) REFERENCES festival_editions(id)
    );

    CREATE TABLE volunteers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      phone VARCHAR(50),
      edition_id INT,
      coordinator_id INT,
      user_id INT UNIQUE,
      FOREIGN KEY (edition_id) REFERENCES festival_editions(id),
      FOREIGN KEY (coordinator_id) REFERENCES members(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE activities (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      description TEXT,
      type ENUM('talk', 'workshop', 'screening'),
      edition_id INT,
      section_id INT,
      FOREIGN KEY (edition_id) REFERENCES festival_editions(id),
      FOREIGN KEY (section_id) REFERENCES festival_sections(id)
    );

    CREATE TABLE activities_guests (
      activity_id INT,
      guest_id INT,
      PRIMARY KEY (activity_id, guest_id),
      FOREIGN KEY (activity_id) REFERENCES activities(id),
      FOREIGN KEY (guest_id) REFERENCES guests(id)
    );

    CREATE TABLE schedule (
      id INT AUTO_INCREMENT PRIMARY KEY,
      start_time DATETIME,
      end_time DATETIME,
      activity_id INT,
      location_id INT,
      edition_id INT,
      FOREIGN KEY (activity_id) REFERENCES activities(id),
      FOREIGN KEY (location_id) REFERENCES locations(id),
      FOREIGN KEY (edition_id) REFERENCES festival_editions(id)
    );
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(`
    DROP TABLE schedule;
    DROP TABLE activities_guests;
    DROP TABLE activities;
    DROP TABLE volunteers;
    DROP TABLE guests;
    DROP TABLE locations;
    DROP TABLE festival_sections;
    DROP TABLE festival_editions;
    DROP TABLE mentors;
    DROP TABLE ninjas;
    DROP TABLE meetings;
    DROP TABLE initiatives;
    DROP TABLE members;
    DROP TABLE users_roles;
    DROP TABLE users;
    DROP TABLE roles;
  `)
}
