package com.aniketlawande;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootController {

	@RequestMapping("/")
	public String returnIndex(HttpServletRequest req, HttpServletResponse res) {
		HttpSession session = req.getSession();
		if (session.getAttribute("user") != null)
			res.addCookie(new Cookie("userId", session.getAttribute("user").toString()));
		return "/public/index.html";
	}
}
