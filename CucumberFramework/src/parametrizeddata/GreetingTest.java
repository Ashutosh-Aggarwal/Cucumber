package parametrizeddata;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GreetingTest {
	@Given("^we work in \"([^\"]*)\"$")
	public void we_work_in(String str) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	    if(str.equals("monday")){
	    	System.out.println("monday testing");
	    	
	    }
	    if(str.equals("wednesday")){
	    	System.out.println("wednesday testing");
	    }
	    if(str.equals("friday")){
	    	System.out.println("friday testing");
	    }
	}
	@When("^we meet \"([^\"]*)\"$")
	public void we_meet(String str) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		if(str.equals("watchman")){
	    	System.out.println("watchman testing");
	    }
		if(str.equals("driver")){
	    	System.out.println("driver testing");
	    }
		if(str.equals("peon")){
	    	System.out.println("peon testing");
	    }
	}
	@Then("^we \"([^\"]*)\" him$")
	public void we_him(String str) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		if(str.equals("hello")){
	    	System.out.println("hello testing");
	    }
		if(str.equals("oye")){
	    	System.out.println("oye testing");
	    }
		if(str.equals("fuck")){
	    	System.out.println("fuck testing");
	    }
		System.out.println("hello git");
		System.out.println("hello git again");
	}

}
