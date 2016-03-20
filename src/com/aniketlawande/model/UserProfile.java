package com.aniketlawande.model;

public class UserProfile {
	public String whatILike;
	public String whatIDo;
	public String headline;
	public String userId;
	public String firstname;
	public String lastname;
	
	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getWhatILike() {
		return whatILike;
	}

	public void setWhatILike(String whatILike) {
		this.whatILike = whatILike;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getWhatIDo() {
		return whatIDo;
	}

	public void setWhatIDo(String whatIDo) {
		this.whatIDo = whatIDo;
	}

	public String getHeadline() {
		return headline;
	}

	public void setHeadline(String headline) {
		this.headline = headline;
	}
	
}
