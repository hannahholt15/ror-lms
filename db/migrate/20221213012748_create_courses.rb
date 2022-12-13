class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :title
      t.integer :course_number
      t.text :desc
      t.string :ctype

      t.timestamps
    end
  end
end
