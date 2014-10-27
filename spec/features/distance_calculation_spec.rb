require 'rails_helper'

feature 'Caluculate the distance between two points' do
  scenario 'with two city names' do
    fill_in 'city1', with: 'Durham'
    fill_in 'city2', with: 'Chicago'
    click_button 'milesCalc'
    click_button 'milesCalc'
    expect(page).to have_content('6411006520893084')
  end
end
