10.times do
    Course.create(
      title: Faker::Educator.course_name,
      desc: Faker::Quotes::Shakespeare.romeo_and_juliet_quote,
      ctype: Faker::Educator.subject,
      course_number: Faker::Number.number(digits: 4)
    )
  end
  
  puts "# Courses:"
  puts Course.all.count