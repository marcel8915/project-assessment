package com.marcellius.singtel.core.beans;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Marcellius
 *
 */
public class MenuBean {

	private String title;
	private String pagePath;
	private String pageLink;
	private boolean isCurrentPage;
	private int pageLevel;
	private List<MenuBean> childMenu;

	public MenuBean(String title, String pagePath, String pageLink, boolean isCurrentPage, int pageLevel) {
		this.setTitle(title);
		this.pagePath = pagePath;
		this.pageLink = pageLink;
		this.isCurrentPage = isCurrentPage;
		this.pageLevel = pageLevel;
		childMenu = new ArrayList<>();
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPagePath() {
		return pagePath;
	}

	public void setPagePath(String pagePath) {
		this.pagePath = pagePath;
	}

	public String getPageLink() {
		return pageLink;
	}

	public void setPageLink(String pageLink) {
		this.pageLink = pageLink;
	}

	public boolean isCurrentPage() {
		return isCurrentPage;
	}

	public void setCurrentPage(boolean isCurrentPage) {
		this.isCurrentPage = isCurrentPage;
	}

	public int getPageLevel() {
		return pageLevel;
	}

	public void setPageLevel(int pageLevel) {
		this.pageLevel = pageLevel;
	}
	
	public List<MenuBean> getChildMenu() {
		return childMenu;
	}

	public void setChildMenu(List<MenuBean> childMenu) {
		this.childMenu = childMenu;
	}
}
