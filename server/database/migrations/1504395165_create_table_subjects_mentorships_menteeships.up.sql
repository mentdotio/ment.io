create table subjects (
  id uuid primary key default gen_random_uuid(),
  name varchar(100)
);

create table mentorships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users (id),
  subject_id uuid references subjects (id)
);

create table menteeships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users (id),
  subject_id uuid references subjects (id)
);
