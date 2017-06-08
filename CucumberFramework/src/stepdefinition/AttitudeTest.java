package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AttitudeTest {

	@Given("^I work ([^\"]*)$")
	public void iWork(String str){
		if(str.equals("latenights")){
			System.out.println("latenight automation");
		}
		if(str.equals("morning")){
			System.out.println("morning automation");
		}
	}
	
	@When("^I meet ([^\"]*)$")
	public void iMeet(String str){
		if(str.equals("watchmen")){
			System.out.println("watchmen testing");
		}
		if(str.equals("paperboy")){
			System.out.println("paperboy testing");
		}
	}
	@Then("^I ([^\"]*) him$")
	public void iGreet(String str){
		if(str.equals("greet")){
			System.out.println("greeted finally");
		}
		if(str.equals("skipgreeted")){
			System.out.println("skipgreeted finally");
		}
	}


}
