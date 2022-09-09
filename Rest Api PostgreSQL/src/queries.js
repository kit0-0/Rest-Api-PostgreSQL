const getstu = 'select * from students';
const getsbyid = 'select * from students where id = $1';
const checkemail = 'select s from students s where s.email = $1';
const poststu = 'insert into students (name, email, age, dob) values ($1, $2, $3, $4)';
const deletestu = 'delete from students where id = $1';
const putst = 'update students set name = $1 where id = $2';

module.exports =
{
    getstu,
    getsbyid,
    checkemail,
    poststu,
    deletestu,
    putst
}