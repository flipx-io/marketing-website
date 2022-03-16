Feature: Does the homepage have access to a state, openModal, and closeModal?
  Homepage needs a state, openModal, and closeModal Feature

  Scenario: Home initializes state with property videoModalActive as false
    Given a state object state
    When state is initialized
    Then state videoModalActive should be false