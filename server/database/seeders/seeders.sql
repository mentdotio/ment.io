COPY menteeships (id, user_id, subject_id) FROM stdin;
\.


--
-- Data for Name: mentorships; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY mentorships (id, user_id, subject_id) FROM stdin;
c9bd8219-1ed7-4057-80e6-cfa491d13cc4	03cb6404-bd2d-4532-afab-fa72abe17a28	314ebf89-b463-4a70-812e-9222e797cfb8
fa612043-da02-4808-a3c3-836b5e15b835	03cb6404-bd2d-4532-afab-fa72abe17a28	199bfcda-eae2-4b9b-8cbc-e02520b426f6
96a83548-6a35-4d68-93f9-04f0dd86a221	7e636893-97d2-4fd4-b1a8-299f15d3a279	199bfcda-eae2-4b9b-8cbc-e02520b426f6
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY schema_migrations (version, dirty) FROM stdin;
1504395165	f
\.


--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY subjects (id, name) FROM stdin;
9e2fcca1-b1ea-45d0-8ec6-4817c19dc359	Postgres
2eb8dfc2-efff-4825-8e64-7f204baf32d0	React
3beb89e3-a900-49ca-821c-553c2d93ae04	GraphQL
314ebf89-b463-4a70-812e-9222e797cfb8	Go
aef6192e-4519-4f32-ab8b-4a0e9f882a95	Elm
199bfcda-eae2-4b9b-8cbc-e02520b426f6	Ruby
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (id, name) FROM stdin;
03cb6404-bd2d-4532-afab-fa72abe17a28	Tom
7e636893-97d2-4fd4-b1a8-299f15d3a279	Betty
f8f68b26-d486-40a4-aa2b-40eb6fdf7d81	Javier
d38c80f1-e601-43d9-aaf5-97fdbb9981b3	Billy
\.
