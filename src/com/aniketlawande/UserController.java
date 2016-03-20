package com.aniketlawande;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.aniketlawande.model.UserRequest;
import com.aniketlawande.model.UserResponse;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@RequestMapping("/current")
	public UserResponse getCurrentUser(HttpServletRequest request) {
		HttpSession session = request.getSession();
		if (session.getAttribute("user") == null)
			return new UserResponse("");
		return new UserResponse(session.getAttribute("user").toString());
	}
	
	@RequestMapping(value="/signIn", method=RequestMethod.POST)
	public UserResponse signInUser(HttpServletRequest request, @RequestBody UserRequest userreq) {
		HttpSession session = request.getSession();
		String firstname = userreq.getFirstname();
		String lastname = userreq.getLastname();
		if (firstname == null || lastname == null)
			return new UserResponse("");
		
		String userId = firstname + "." + lastname;
		session.setAttribute("user", userId);
		return new UserResponse(userId);
	}
}
