package com.ipldashboard.controller;

import com.ipldashboard.model.Match;
import com.ipldashboard.model.Team;
import com.ipldashboard.repository.MatchRepository;
import com.ipldashboard.repository.TeamRepository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;
    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team")
    public Iterable<Team> getAllTeams(){
        return this.teamRepository.findAll();
    } 

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team = this.teamRepository.getByTeamName(teamName);
        if(team==null){
            throw new ResponseStatusException(NOT_FOUND, "Team not found");
        }
        team.setMatches(this.matchRepository.getMatchesByTeamName(teamName,4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getTeamMatchesByYear(@PathVariable("teamName") String teamName, @RequestParam("year") int year){
        getTeam(teamName);
        LocalDate dateStart = LocalDate.of(year , 1, 1);
        LocalDate dateEnd = LocalDate.of(year+1 , 1, 1);
        return this.matchRepository.getMatchesByTeamBetweenDate(teamName, dateStart, dateEnd);
    }
}
