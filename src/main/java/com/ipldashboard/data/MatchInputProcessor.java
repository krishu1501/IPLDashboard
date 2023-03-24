package com.ipldashboard.data;


import com.ipldashboard.model.Match;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.boot.autoconfigure.web.format.DateTimeFormatters;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.lang.NonNull;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;

public class MatchInputProcessor implements ItemProcessor<MatchInput, Match> {

  private static final Logger log = LoggerFactory.getLogger(MatchInputProcessor.class);

  @Override
  public Match process(final @NonNull MatchInput matchInput) throws Exception {
    Match match = new Match();
    match.setId(Long.parseLong(matchInput.getId()));
    match.setCity(matchInput.getCity());
    match.setDate(LocalDate.parse(matchInput.getDate(), DateTimeFormatter.ofPattern("dd-MM-yyyy")));
    match.setPlayerOfMatch(matchInput.getPlayer_of_match());
    match.setVenue(matchInput.getVenue());

    String firstInningsTeam, secondInningsTeam;
    if("bat".equals(matchInput.getToss_decision())){
        firstInningsTeam = matchInput.getToss_winner();
        secondInningsTeam = firstInningsTeam.equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }
    else{
        secondInningsTeam = matchInput.getToss_winner();
        firstInningsTeam = secondInningsTeam.equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }
    //setting the team who bat first as team1
    match.setTeam1(firstInningsTeam);
    match.setTeam2(secondInningsTeam);

    match.setTossWinner(matchInput.getToss_winner());
    match.setTossDecision(matchInput.getToss_decision());
    match.setMatchWinner(matchInput.getWinner());
    match.setResult(matchInput.getResult());
    match.setResultMargin(matchInput.getResult_margin());
    match.setEliminator(matchInput.getEliminator().equalsIgnoreCase("Y") ? true : false);
    match.setUmpire1(matchInput.getUmpire1());
    match.setUmpire2(matchInput.getUmpire2());

    return match;
  }

}