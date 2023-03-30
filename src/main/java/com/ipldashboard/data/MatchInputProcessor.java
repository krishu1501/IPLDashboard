package com.ipldashboard.data;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.lang.NonNull;

import com.ipldashboard.model.Match;

public class MatchInputProcessor implements ItemProcessor<MatchInput, Match> {

  private static final Logger log = LoggerFactory.getLogger(MatchInputProcessor.class);

  @Override
  public Match process(final @NonNull MatchInput matchInput) throws Exception {
    Match match = new Match();
    match.setId(Long.parseLong(matchInput.getId()));
    match.setCity(matchInput.getCity());
    match.setDate(LocalDate.parse(matchInput.getDate(), DateTimeFormatter.ofPattern("dd-MM-yyyy")));
    match.setPlayerOfMatch(matchInput.getPlayerOfMatch());
    match.setVenue(matchInput.getVenue());

    String firstInningsTeam, secondInningsTeam;
    if("bat".equals(matchInput.getTossDecision())){
        firstInningsTeam = matchInput.getTossWinner();
        secondInningsTeam = firstInningsTeam.equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }
    else{
        secondInningsTeam = matchInput.getTossWinner();
        firstInningsTeam = secondInningsTeam.equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }
    //setting the team who bat first as team1
    match.setTeam1(firstInningsTeam);
    match.setTeam2(secondInningsTeam);

    //converting format to comma separated player names , by removing characters []' and unnecessary whitespace
    String team1PlayersString = matchInput.getTeam1Players().replaceAll("[\\[\\]']", "").replaceAll("\\s*,\\s*", ",").trim();
    String team2PlayersString = matchInput.getTeam2Players().replaceAll("[\\[\\]']", "").replaceAll("\\s*,\\s*", ",").trim();
    if(firstInningsTeam.equals(matchInput.getTeam1())){
      match.setTeam1PlayersString(team1PlayersString);
      match.setTeam2PlayersString(team2PlayersString);
    }
    else{
      match.setTeam1PlayersString(team2PlayersString);
      match.setTeam2PlayersString(team1PlayersString);
    }

    match.setTossWinner(matchInput.getTossWinner());
    match.setTossDecision(matchInput.getTossDecision());
    match.setMatchWinner(matchInput.getWinningTeam());
    match.setResult((matchInput.getWonBy()).toLowerCase());
    match.setResultMargin(matchInput.getMargin());
    match.setEliminator(matchInput.getSuperOver().equalsIgnoreCase("Y") ? true : false);
    match.setUmpire1(matchInput.getUmpire1());
    match.setUmpire2(matchInput.getUmpire2());

    return match;
  }

}