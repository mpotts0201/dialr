# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

murphy_potts = User.create!(
    email: 'murphy@potts.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

alexander_bell = User.create!(
    email: 'alexander@bell.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

Contact.create!(
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    phone: '(123) 456-7890',
    email: 'lemonpeel@gmail.com',
    contactType: 'Work',
    address: '6 Ashley Dr. Tyler, TX 75703',
    user_id: murphy_potts.id,
)

Contact.create!(
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    phone: '(098) 765-4321',
    email: 'modernsquash@yahoo.com',
    contactType: 'Personal',
    address: '7723 Ridge St. San Antonio, TX 78209',
    user_id: murphy_potts.id,
)

Contact.create!(
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    phone: '(123) 920-1095',
    email: 'boldnest@att.com',
    contactType: 'Personal',
    address: '857 William Lane Plainview, TX 79072',
    user_id: murphy_potts.id,
)

Contact.create!(
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    phone: '(385) 189-3489',
    email: 'bluegem@gmail.com',
    contactType: 'Work',
    address: '8431 Rocky River Ave. Dallas, TX 75228',
    user_id: alexander_bell.id,
)

Contact.create!(
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    phone: '(385) 189-4589',
    email: 'blackraven@hotmail.com',
    contactType: 'Work',
    address: '530 Wakehurst Street Richardson, TX 75080',
    user_id: alexander_bell.id,
)

Contact.create!(
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    phone: '(185) 489-3449',
    email: 'johndavis@john.org',
    contactType: 'Personal',
    address: '8424 Illinois Ave. Garland, TX 75040',
    user_id: alexander_bell.id,
)