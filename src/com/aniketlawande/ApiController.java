package com.aniketlawande;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
public class ApiController {

	@RequestMapping("/hello")
	public @ResponseBody String hello() {
		return "hello";
	}
}
