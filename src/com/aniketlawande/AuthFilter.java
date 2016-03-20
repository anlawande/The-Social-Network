package com.aniketlawande;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * This filter implements basic checking of session variables to authenticate the user
 * @author Aniket
 *
 */
public class AuthFilter implements Filter{

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest)req;
		HttpServletResponse response = (HttpServletResponse)res;
		HttpSession session = request.getSession();
		
		boolean isAuth = true;
		if (session.getAttribute("userid") == null) {
			if (request.getRequestURI().contains("/public/"))
				isAuth = true;
			else if (request.getRequestURI().equals("/The-Social-Network/"))
				isAuth = true;
			else if (request.getRequestURI().contains("/api/user/"))
				isAuth = true;
			else
				isAuth = false;
		}
		
		if (isAuth)
			chain.doFilter(req, res);
		else
			response.sendRedirect("/The-Social-Network/public/index.html");
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}

}
