User.delete_all

10.times do
  Course.create(
    title: Faker::Educator.course_name,
    desc: Faker::Quotes::Shakespeare.romeo_and_juliet_quote,
    ctype: Faker::Educator.subject,
    course_number: Faker::Number.number(digits: 4)
  )

  User.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name,
    email: "#{Faker::Tea.variety}@email.com",
    password: 'password'
  )
end

puts "# Courses:"
puts Course.all.count

puts "# Users:"
puts User.all.count