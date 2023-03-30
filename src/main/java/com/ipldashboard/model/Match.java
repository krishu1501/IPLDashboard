package com.ipldashboard.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"team1PlayersString","team2PlayersString"})//these fields will be ignored while serializing to JSON
public class Match {
    @Id
    private long id;
    private String city;
    private LocalDate date;
    private String playerOfMatch;
    private String venue;
    private String team1;
    private String team2;
    private String tossWinner;
    private String tossDecision;
    private String matchWinner;
    private String result;
    private String resultMargin;
    private boolean eliminator;
    private String umpire1;
    private String umpire2;
    //contains comma separated players name
    private String team1PlayersString;
    private String team2PlayersString;
    private transient List<String> team1Players;
    private transient List<String> team2Players;

    public Match() {
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public String getPlayerOfMatch() {
        return playerOfMatch;
    }
    public void setPlayerOfMatch(String playerOfMatch) {
        this.playerOfMatch = playerOfMatch;
    }
    public String getVenue() {
        return venue;
    }
    public void setVenue(String venue) {
        this.venue = venue;
    }
    public String getTeam1() {
        return team1;
    }
    public void setTeam1(String team1) {
        this.team1 = team1;
    }
    public String getTeam2() {
        return team2;
    }
    public void setTeam2(String team2) {
        this.team2 = team2;
    }
    public String getTossWinner() {
        return tossWinner;
    }
    public void setTossWinner(String tossWinner) {
        this.tossWinner = tossWinner;
    }
    public String getTossDecision() {
        return tossDecision;
    }
    public void setTossDecision(String tossDecision) {
        this.tossDecision = tossDecision;
    }
    public String getMatchWinner() {
        return matchWinner;
    }
    public void setMatchWinner(String matchWinner) {
        this.matchWinner = matchWinner;
    }
    public String getResult() {
        return result;
    }
    public void setResult(String result) {
        this.result = result;
    }
    public String getResultMargin() {
        return resultMargin;
    }
    public void setResultMargin(String resultMargin) {
        this.resultMargin = resultMargin;
    }
    public boolean getEliminator() {
        return eliminator;
    }
    public void setEliminator(boolean eliminator) {
        this.eliminator = eliminator;
    }
    public String getUmpire1() {
        return umpire1;
    }
    public void setUmpire1(String umpire1) {
        this.umpire1 = umpire1;
    }
    public String getUmpire2() {
        return umpire2;
    }
    public void setUmpire2(String umpire2) {
        this.umpire2 = umpire2;
    }

    public String getTeam1PlayersString() {
        return team1PlayersString;
    }

    public void setTeam1PlayersString(String team1PlayersString) {
        this.team1PlayersString = team1PlayersString;
    }

    public String getTeam2PlayersString() {
        return team2PlayersString;
    }

    public void setTeam2PlayersString(String team2PlayersString) {
        this.team2PlayersString = team2PlayersString;
    }

    public List<String> getTeam1Players() {
        return Arrays.asList(this.team1PlayersString.split(","));
    }

    public void setTeam1Players(List<String> team1Players) {
        this.team1Players = team1Players;
    }

    public List<String> getTeam2Players() {
        return Arrays.asList(this.team2PlayersString.split(","));
    }

    public void setTeam2Players(List<String> team2Players) {
        this.team2Players = team2Players;
    }
}
