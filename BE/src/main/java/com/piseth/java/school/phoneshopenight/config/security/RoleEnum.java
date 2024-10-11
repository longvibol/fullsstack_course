package com.piseth.java.school.phoneshopenight.config.security;

import static com.piseth.java.school.phoneshopenight.config.security.PermissionEnum.BRAND_READ;
import static com.piseth.java.school.phoneshopenight.config.security.PermissionEnum.BRAND_WRITE;
import static com.piseth.java.school.phoneshopenight.config.security.PermissionEnum.MODEL_READ;
import static com.piseth.java.school.phoneshopenight.config.security.PermissionEnum.MODEL_WRITE;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RoleEnum {
	ADMIN(Set.of(BRAND_WRITE, BRAND_READ, MODEL_WRITE, MODEL_READ)),
	SALE(Set.of(BRAND_READ, MODEL_READ)),
	USER(Set.of());
	
	private Set<PermissionEnum> permissions;
	
	public Set<SimpleGrantedAuthority> getAuthorities(){
		Set<SimpleGrantedAuthority> grantedAuthorities = this.permissions.stream()
			.map(permission -> new SimpleGrantedAuthority(permission.getDescription()))
			.collect(Collectors.toSet());
		
		SimpleGrantedAuthority role = new SimpleGrantedAuthority("ROLE_"+ this.name());
		grantedAuthorities.add(role);
		System.out.println(grantedAuthorities);
		return grantedAuthorities;
	}
}
