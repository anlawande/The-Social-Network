package com.aniketlawande;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootController {

	@RequestMapping("/")
	public String returnIndex() {
		return "/public/index.html";
	}
}
