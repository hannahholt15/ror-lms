Course.delete_all
User.delete_all

10.times do
  course = Course.create(
    title: Faker::Educator.course_name,
    desc: Faker::Quotes::Shakespeare.romeo_and_juliet_quote,
    ctype: Faker::Educator.subject,
    course_number: Faker::Number.number(digits: 4)
  )

  user = User.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name,
    email: "#{Faker::Tea.variety}@email.com",
    password: 'password',
    img: 'https://images.unsplash.com/photo-1597514578288-1227906ae836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
  )

  Enrollment.create(
    user_id: user.id,
    course_id: course.id
  )
end

puts "# Courses:"
puts Course.all.count

puts "# Users:"
puts User.all.count

puts "# Enrollments:"
puts Enrollment.all.count