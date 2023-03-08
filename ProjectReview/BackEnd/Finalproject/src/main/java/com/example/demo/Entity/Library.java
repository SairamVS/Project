package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Library")
public class Library {
	@Column(name="S_No")	
	private long S_no;
	
	@Id
	@Column(name="Book_ID")
	private long Bk_Id;
	
	@Column(name="Book_Name")
	private String Bk_name;
	
	@Column(name="Book_Author")
	private String Author;
	
	@Column(name="Genre")
	private String Genre;
	
	@Column(name="Languages")
	private String language;
	
	@Column(name="Book_Price")
	private int price;
	
	@Column(name="Published By")
	private String Publisher;

	public Library(long s_no, long bk_Id, String bk_name, String author, String genre, String language, int price,
			String publisher) {
		super();
		S_no = s_no;
		Bk_Id = bk_Id;
		Bk_name = bk_name;
		Author = author;
		Genre = genre;
		this.language = language;
		this.price = price;
		Publisher = publisher;
	}

	public long getS_no() {
		return S_no;
	}

	public void setS_no(long s_no) {
		S_no = s_no;
	}

	public long getBk_Id() {
		return Bk_Id;
	}

	public void setBk_Id(long bk_Id) {
		Bk_Id = bk_Id;
	}

	public String getBk_name() {
		return Bk_name;
	}

	public void setBk_name(String bk_name) {
		Bk_name = bk_name;
	}

	public String getAuthor() {
		return Author;
	}

	public void setAuthor(String author) {
		Author = author;
	}

	public String getGenre() {
		return Genre;
	}

	public void setGenre(String genre) {
		Genre = genre;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getPublisher() {
		return Publisher;
	}

	public void setPublisher(String publisher) {
		Publisher = publisher;
	}
	
	public Library() {
		
	}
	
}
