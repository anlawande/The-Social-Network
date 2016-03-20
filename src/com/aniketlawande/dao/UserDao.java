package com.aniketlawande.dao;

import java.util.HashMap;
import java.util.Map;

import com.aniketlawande.model.OperationResponse;
import com.aniketlawande.model.UserProfile;

public class UserDao {
	static Map<String, UserProfile> users = new HashMap<String, UserProfile>();
	
	public static UserProfile getUserProfile(String userId) {
		return users.get(userId);
	}
	
	public static OperationResponse setUserProfile(UserProfile req) {
		users.put(req.getUserId(), req);
		
		OperationResponse op = new OperationResponse();
		op.setOpCode("SUCCESS");
		
		return op;
	}
}
