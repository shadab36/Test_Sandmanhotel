package TestRunner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "." }, format ={
		"pretty", "html:target1" },tags= {"@Login_Test_onmobile"})
public class Ruuner {

	@BeforeClass
	public static void beforeClass()  {
		try {
			SetupClass.before_Class();
	}	catch(Exception ec) {
	}
	}
			@AfterClass
			public static void AfterClass() {	
				try {
				SetupClass.afterClass();
				}catch (Exception e){
					
				
}}
}